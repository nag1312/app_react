'use client';

import React from "react";
import {useState, useEffect} from "react";
import axios from "../../axios";

var token = '266d5f2aa28fd8477115cc6ceecab371bee02aea34de8eacc055428ed6bc9a29bfcb1364585872e75581cb5b0abcf0c3caa1cbad7b1d47adfd03736ad3d2b2e62c89755c1795c646ea4ff263e015357b2ce4fef1481ec79b8ce1980716b249a79a0f3e7ef5b55daf15eddf4b475218795c4e634cc95854e1d120ea1841028457';

const Page = () => {

const [error, setError] = useState(null);
const [journals, setJournals] = useState([]);

useEffect(() => {
    axios
        .get('http://localhost:1337/api/journals', {
            headers: {
                'Authorization' : 'Bearer ' + token
              }                
        })
        .then(({data}) => setJournals(data.data))
        .catch(error => setError(error))
}, []);

if (error) {
    return <div>non :/ {error.message}</div>;
}
return (
    <div className="Page">
        <ul>blabla
            {journals.map(({id, attributes}) => (
            <li key={id}>{attributes.test}</li>))}
        </ul>
    </div>
);
};
export default Page;

/*
export default async function Page ({journals}) {
    return (
        <div>blabla
        {journals && journals.data && journals.data.map((data) =>
            <p key={data.id}>{data.data.attributes.test}</p>
        )} 
    </div>
    )}

    export async function getStaticProps() {
        try {
            const res = await axios.get('http://localhost:1337/api/journals/1', {
                headers: {
                    'Authorization' : 'Bearer ' + token
                  }                
            });
            const data = res.data
            const journals = data.data
            return {props : {journals}}
        } catch (error) {
            return { error }
        }
    };

/*
export default class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Journals: []
        };
    }
    getTestData() {
        axios
            .get(`/journals/1`, {
                headers: {
                    'Authorization' : 'Bearer ' + token
                  }
            })
            .then(res => {
                const data = res.data
                const attributes = data.data.attributes
                //console.log(data.data.attributes.test)
                console.log(attributes.test)
                const journals = data && data.map(u =>
                    <div>
                    <p key={u.id}>{u.test}</p>

                    </div>
                    )
                    this.setState({journals})
                
            })
            .catch((error) => {
                console.log(error)
            })
        }
    componentDidMount(){
        this.getTestData()
    }
    render() {

        return (
            <div>
            {this.state.journals}
            </div>
        )
    }
}



/*
axios.get("http://localhost:1337/api/journals/1", {
  headers: {
    'Authorization' : 'Bearer ' + token
  }
}).then((res) => {
   const resHttp = res.data;
console.log(resHttp.data.attributes.test);

});
*/





 /*   
    Page.getStaticProps = async (ctx) => {
    try {
      const res = await axios.get('/api/journals/1', {
        headers: {
            'Authorization' : 'Bearer ' + token
          }
    });
      const journals = res.data
      return {journals}
    } catch (error) {
      return { error }
    }
  };}


export default Page;
/*

export default class test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Test: []
        };
    }
    getTestData(){
        axios.get('/journals/1', {
            headers: {
                'Authorization' : 'Bearer ' + token
              }
        }).then(res =>{
        const data = res.data
        console.log(data)
        const contenu = data.map(t =>
                <div>
                    <p key={t.id}>{t.attributes}</p>
                </div>
            )
            this.setState({contenu})
        })
        .catch((error) => {
            console.log(error)
        })

}
componentDidMount(){
    this.getTestData()
}
render() {

    return (
        <div>
        {this.state.test}
        </div>
    )
}
}*/