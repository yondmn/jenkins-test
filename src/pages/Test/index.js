import React from 'react';

// const Test = (props) => <div>test: {props.name || 'shabi'}</div>;
const Kkk = (props) => {
    const { arr } = props;
    const result = Array.isArray(arr) && arr.length > 0
        ? arr.map((item, index) => <li key={ index }>{ item }</li>)
        : <li>暂无<span role="img" aria-label="Panda">😯</span></li>;
    
    return <ul>{ result }</ul>;
}

// 等同于上面的方式
class Test extends React.Component {
    constructor(props) {
        super(props);
        // isExact: true
        // params: {}
        // path: "/about"
        // url: "/about"
        console.log(this.props.match)
    }
    render () {
        const arr = [11, 22, 33, 44, 55];
        const { match } = this.props;
        return (
        <div>
            <Kkk arr={ arr }/>
            <p>test: {this.props.name || 'shabi'}</p>
            <p>{ this.props.isLoggin ? 'logined' : 'go to login' }</p>
            <p>sb: <strong>{ match.params.sb }</strong></p>
        </div>);
    }
}

export default Test;