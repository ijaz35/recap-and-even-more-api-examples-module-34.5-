const loadComments = async () => {
    const url = 'https://jsonplaceholder.typicode.com/comments';
    const res = await fetch(url);
    const data = await res.json();
    displayData(data);
}
const displayData = (comments) => {
    const commentsContainer = document.getElementById('comments-container');
    comments.forEach(comment => {
        // console.log(comment.id);
        const singleComment = document.createElement('div');
        singleComment.innerHTML = `<p>NAME: ${comment.name}</p>
        <p>COMMENTS : ${comment.body}</p>
        <button onclick="loadComment(${comment.id})">Details</button>
            `;

        singleComment.style.border = '2px solid gray';
        singleComment.style.padding = '20px';
        commentsContainer.appendChild(singleComment);
        // console.log(comment.body);
    });
}
const loadComment = async (id) => {
    const url = `https://jsonplaceholder.typicode.com/comments/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    showEmail(data.email);
}
const showEmail = (email) => {
    const emailContainer = document.getElementById('commenters-email');
    emailContainer.textContent = '';
    const emailParagraph = document.createElement('p');
    emailParagraph.classList.add('email');
    emailParagraph.innerText = email;
    emailContainer.appendChild(emailParagraph);
}
loadComments();