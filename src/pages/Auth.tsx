import React, { Component } from 'react';
import { Mobile, PC } from '../MediaQuery';

let token = new URLSearchParams(window.location.search).get("code");

class Auth extends Component {
    state: {data:null|any} = { data: null };

    async componentDidMount() {
        this.setState({
            data: (await((await fetch(`https://discordoauth.bsiu6562.repl.co/token/${token}`)).json()))
        })
    }

    render() {
        if (this.state.data !== null) {
            window.localStorage.setItem("userData", JSON.stringify({
                userId: this.state.data.user.id,
                userName: this.state.data.user.username,
                userTag: this.state.data.user.tag.split('#')[1],
                created: this.state.data.user.createdTimestamp,
                locale: this.state.data.user.bot,
                avatarUrl: this.state.data.user.avatarUrl
            }))
        }

        window.location.assign('/')
        return (
            <>
                <div>
                    <Mobile>
                        기다려주세요..
                    </Mobile>
                </div>

                <div>
                    <PC>
                        기다려주세요..
                    </PC>
                </div>
            </>
        )
    }
}

export default Auth;