import {action, computed, observable} from 'mobx';

const queries = ['today', 'yesterday'];

export default class SlackStore {
    token;

    @observable yesterday = {};
    @observable today = {};
    @observable users = {};
    @observable userMessageCount = {};

    constructor(token) {
        this.token = token;

        this.update();
    }

    update() {
        this.fetchMessages().then(this.setMessages.bind(this));
        this.fetchUsers().then(this.setUsers.bind(this));

        setTimeout(this.update.bind(this), 3600000)
    }

    fetchMessages() {
        // TODO load paged messages

        const proms = queries.map((query) => {
            return fetch('https://slack.com/api/search.messages?token=' + this.token + '&query=on:' + query + '&count=100')
            .then((response) => response.json())
            .then((responseJson) => responseJson.messages);
        });

        return Promise.all(proms);
    }

    fetchUsers() {
        return fetch('https://slack.com/api/users.list?token=' + this.token)
        .then((response) => response.json())
        .then((responseJson) => responseJson.members);
    }

    @action setMessages(messages) {
        this.today = messages[0];
        this.yesterday = messages[1];

        const userMessageCount = {};

        this.today.matches.forEach((message) => {
            userMessageCount[message.username] = (userMessageCount[message.username] || 0) + 1;
        });
        this.yesterday.matches.forEach((message) => {
            userMessageCount[message.username] = (userMessageCount[message.username] || 0) + 1;
        });

        this.userMessageCount = userMessageCount
    }

    @action setUsers(users) {
        this.users = users;
    }

    @computed get totalYesterday() {
        return this.yesterday.total;
    }

    @computed get totalToday() {
        return this.today.total;
    }

    @computed get totalUsers() {
        return this.users.length;
    }

    @computed get bestUsers() {
        const keysSorted = Object.keys(this.userMessageCount).sort((a, b) => {
            return this.userMessageCount[b] - this.userMessageCount[a];
        });

        const result = [];
        for (var i = 0; i < 3; i++) {
            if (!keysSorted[i]) {
                break;
            }

            result.push({
                userName: keysSorted[i],
                count: this.userMessageCount[keysSorted[i]],
            });
        }

        return result;
    }
}
