import{j as m,r as a,s as u,C as E,R as O,a as L}from"./vendor.85a31dfa.js";const M=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}};M();const j=[{id:"1",text:"Buy eggs",isDone:!0},{id:"2",text:"Walk the dog",isDone:!1},{id:"3",text:"Watch a movie",isDone:!1}],e=m.exports.jsx,x=m.exports.jsxs,w=a.exports.createContext({}),J=r=>{const[i,o]=a.exports.useState([]),[s,t]=a.exports.useState(""),[n,d]=a.exports.useState(!1),[g,D]=a.exports.useState(!1),[y,v]=a.exports.useState(!1),[C,f]=a.exports.useState(""),[N,T]=a.exports.useState(-1);a.exports.useEffect(()=>{o(j)},[]);const k=l=>{o(c=>{const p=JSON.parse(JSON.stringify(c));return p[l].isDone=!p[l].isDone,p})},S=l=>{o(c=>{const p=JSON.parse(JSON.stringify(c));return p.splice(l,1),p})},b=(l,c)=>{d(!n),f(l),T(c)},I=l=>{o(c=>{const p=JSON.parse(JSON.stringify(c));return p[N].text=l,p}),f(""),b()},F=l=>{o(c=>[...c,{id:`${c.length+1}`,text:l,isDone:!1}])};return e(w.Provider,{value:{todoData:i,isShowModal:n,isNewItem:g,todoEditContent:C,todoFilter:s,isFilter:y,setIsFilter:v,setTodoFilter:t,toggleTodo:k,removeTodo:S,toggleModal:b,setTodoEditContent:f,submitEditTodo:I,addNewToDo:F,setIsNewItem:D},children:r.children})},h=()=>a.exports.useContext(w);function P({list:r}){const{toggleTodo:i,removeTodo:o,toggleModal:s,todoFilter:t,isFilter:n}=h();return e(R,{children:r.filter(d=>d.text.toLowerCase().includes(t.toLowerCase())||!n).map((d,g)=>x(W,{isDone:d.isDone,children:[e("p",{onClick:()=>i(g),children:d.text}),x("div",{className:"btn-wrap",children:[e("button",{onClick:()=>s(d.text,g),children:e("img",{src:"src/assets/edit.png"})}),e("button",{onClick:()=>o(g),children:e("img",{src:"src/assets/bin.png"})})]})]},d.id))})}const R=u.div`
  margin: 0 auto;
  padding: 10px;
  width: fit-content;
`,W=u.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  padding-left: 55px;
  cursor: default;

  p {
    cursor: pointer;

    ${r=>r.isDone&&E`
        text-decoration: line-through;
      `}
  }

  .btn-wrap {
    visibility: hidden;
    opacity: 0;
    height: 15px;
    margin-left: 5px;
    transition: all 0.5s;

    button {
      background-color: transparent;
      border: none;
      width: 15px;
      height: 15px;
      margin-left: 10px;
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
        object-fit: fill;
      }
    }
  }

  &:hover .btn-wrap {
    visibility: visible;
    opacity: 0.7;
  }
`;function A(){const{todoEditContent:r,setTodoEditContent:i,toggleModal:o,submitEditTodo:s}=h();return x(B,{children:[e("input",{type:"text",value:r,onChange:t=>i(t.target.value)}),e("button",{onClick:()=>s(r),children:"OK"}),e("button",{onClick:o,children:"canel"})]})}const B=u.div`
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 200px;
  background-color: rgba(240, 240, 240, 0.7);
  border: 1px solid #777;
  border-radius: 8px;

  input {
    display: block;
    width: 80%;
    height: 40px;
    margin-top: 30px;
    padding: 5px;
    text-align: center;
    font-size: 16px;
    border: 1px solid #777;
    border-radius: 8px;
  }

  button {
    width: 30%;
    height: 25px;
  }
`;function K(){const[r,i]=a.exports.useState(""),{addNewToDo:o,setIsNewItem:s}=h();return x(V,{children:[e("button",{className:"close",onClick:()=>s(!1),children:"\xD7"}),e("input",{type:"text",value:r,onChange:t=>i(t.target.value)}),e("button",{className:"add-new-btn",onClick:()=>{o(r),i("")},children:"+"})]})}const V=u.div`
  text-align: center;

  input {
    border: 1px solid #999;
    border-radius: 5px 0 0 5px;
    padding: 5px;
    margin-top: 15px;
    color: #777;

    &:focus {
      outline: none;
    }
  }

  .add-new-btn {
    margin-left: -1px;
    background-color: transparent;
    border: 1px solid #888;
    border-radius: 0 5px 5px 0;
    padding: 5px 10px;

    &:hover {
      background: #777;
      color: #fff;
    }
  }

  .close {
    width: 20px;
    height: 20px;
    background: transparent;
    margin-right: 10px;
    color: #999;
    line-height: 20px;
    border: 1px solid #999;
    border-radius: 50%;
    cursor: pointer;
  }
`;function $(){const{todoFilter:r,setTodoFilter:i}=h();return e(q,{children:e("input",{type:"text",value:r,onChange:o=>i(o.target.value)})})}const q=u.div`
  text-align: center;

  input {
    border: 1px solid #999;
    border-radius: 5px;
    padding: 5px;
    margin-top: 15px;
    color: #777;

    &:focus {
      outline: none;
    }
  }
`;function z(){const{todoData:r,isShowModal:i,isNewItem:o,isFilter:s,setIsNewItem:t,setIsFilter:n}=h();return x(G,{children:[x("h1",{children:["To Do List",e("button",{className:"show-serach-btn",onClick:()=>n(!s),children:e("img",{src:"src/assets/loupe.png"})})]}),s&&e($,{}),e(P,{list:r}),!o&&e("button",{className:"show-add-new-btn",onClick:()=>t(!o),children:"+"}),o&&e(K,{}),i&&e(A,{})]})}const G=u.div`
  h1 {
    margin-top: 30px;
    text-align: center;
    font-weight: 500;
  }

  .show-serach-btn {
    background-color: transparent;
    border: none;
    width: 15px;
    height: 15px;
    margin-left: 10px;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
  }

  .show-add-new-btn {
    display: block;
    margin: 0 auto;
    margin-top: 20px;
    border: 1px solid #999;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background: transparent;
    line-height: 20px;
    color: #777;
    cursor: pointer;
  }
`;O.render(e(L.StrictMode,{children:e(J,{children:e(z,{})})}),document.getElementById("root"));
