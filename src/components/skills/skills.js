import React, { Fragment } from 'react';
import './skills.css';  

class SkillComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    

    render() {
        const searchTerm = this.props.txt || '';
        const discriptionList = this.props.discription|| [];
        return (
            <div>
                <h3>{searchTerm}</h3>
                {
                    discriptionList.map((list, index) => {
                        return (
                            <Fragment>
                                <HEADER {...list}/>
                                <TITLE {...list}/>
                                <INFO {...list}/>
                                <CODE {...list}/>
                                <IMG {...list}/>
                            </Fragment>
                        )
                    })
                }
            </div>
        );
    }
}                               

function HEADER(txt) {
    return (txt) ? <h3>{txt.header}</h3> : '';
} 

function TITLE(txt) {
    return (txt) ? <h3>{txt.title}</h3> : '';
}

function INFO(info) {
    return (info) ? <h3>{info.info}</h3> : '';
}

function CODE(list) {
    return list.code.map((eachList) => {
        return (<p>{eachList.code}</p>);
    });
}

function IMG(img) {
    return (img) ? <img src={img.img} /> : '';
}

export default SkillComponent;