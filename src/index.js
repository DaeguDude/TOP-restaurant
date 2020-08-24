import { initialLoad } from './initial-load'


let content = document.getElementById('content');

/**
 * InitialLoad is going to return the container that contains
 * all html for index.html
 */ 
content.appendChild(initialLoad());



