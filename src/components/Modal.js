import React, { useState, useRef } from 'react';
import './style/Modal.scss';

const mainItems = [
    {
        id: 1,
        header: "REACT",
        text1: "React 기본 문법을 이해하고 활용할 수 있다.",
        text2: "React 라이브러리를 활용할 수 있다.",
        text3: "Conmponent로 재사용 가능한 UI 구조를 만들 수 있다.",
        text4: "React Router DOM을 활용하여 페이지를 구성할 수 있다.",
    },
    {
        id: 2,
        header: "HTML",
        text1: "웹 표준 및 웹 접근성을 활용하여 웹페이지를 제작할 수 있다.",
        text2: "시멘틱 마크업을 이용할 수 있다.",
        text3: "크로스브라우징에 대응할 수 있다.",
    },
    {
        id: 3,
        header: "CSS",
        text1: "scss문법에 익숙하다.",
        text2: "미디어쿼리를 이용할 수 있으며 반응형, 적응형 페이지를 제작할 수 있다.",
        text3: "keyframe을 이용하여 animation을 구현할 수 있다.",
        
    },
    {
        id: 4,
        header: "JAVASCRIPT",
        text1: "javascript 기본문법을 이해하고 동적 소스를 작성할 수 있다.",
        text2: "jquary 및 jquaryUI를 사용할 수 있다.",
        text3: "vanila javascript로 슬라이드를 제작할 수 있다.",
        text4: "오픈소스를 수정 및 활용할 수 있다.",
        text5: "axios API를 사용할 수 있다.",
    },
]

const AccordionItem = (props) => {
    const contentEl = useRef();
    const {handleToggle, active, mainItem} = props;
    const {header, id, text1, text2, text3, text4} = mainItem;

    return (
        <div className="accordion">
            <div className={`accordion-header ${active === id ? 'active' : ''}`} onClick={() => handleToggle(id)} >
                <h1 className='accordion-title'>{header}</h1>
            </div>
            <div ref={contentEl} className={`accordion-body ${active === id ? 'show' : ''}`} style={active === id ? {height: contentEl.current.scrollHeight} : {height: "0px"}}>
                <ul className='accordion-detail'>
                    <li>{text1}</li>
                    <li>{text2}</li>  
                    <li>{text3}</li>  
                    <li>{text4}</li>  
                </ul>
            </div>
        </div>
    )

}

const Modal = (props) => {

    const [active, setActive] = useState(null);

    const handleToggle = (index) => {
        if(active === index){
            setActive(null);
        }else{
            setActive(index);
        }
    }
    return (
        <div className='modal' id='modal'>
            <button className='modalClose' onClick={props.hideModal}><i className="fas fa-times"></i></button>
            <div className='modal-area'>
                <div className='modal-list'>
                    {mainItems.map((mainItem, index) => {
                        return (
                            <AccordionItem key={index} active={active} handleToggle={handleToggle} mainItem={mainItem}></AccordionItem>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Modal;