import{app}from"../../../scripts/app.js";import{chatButton}from"./chat_button.js";import{helpButton}from"./help_button.js";import{dragHandle}from"./drag_handle.js";import{manageDependenciesButton}from"./Comfly_manager.js";const ComflyExtension={name:"Comfly",async init(){console.log("[Comfly]","Extension initialized"),this.createUI()},createUI(){const e=document.createElement("div");e.style.position="fixed",e.style.left="20px",e.style.top="20px",e.style.zIndex="1000",e.style.display="flex",e.style.flexDirection="row",e.style.alignItems="center",document.body.appendChild(e);const t=document.createElement("div");t.style.display="none",t.style.flexDirection="row",t.style.alignItems="center",t.style.marginLeft="10px";const n=dragHandle.createButton(e,t);e.appendChild(n);const o=chatButton.createButton(e);t.appendChild(o);const l=manageDependenciesButton.createButton();t.appendChild(l);const a=helpButton.createButton();t.appendChild(a),e.appendChild(t)}};app.registerExtension(ComflyExtension);