
const Lumpcontents = [
    { title: 'Create', content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry On the other hand, we denounce with righteous indignation and dislike men who are so beguiled'},
    { title: 'Content', content:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using'},
    { title: 'Media', content:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage'},
    { title: 'Manage', content:'There are many variations of passages of Lorem Ipsum available'},
    { title: 'Posting', content:'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born'},
    { title: 'Schedule', content:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectet'},
    { title: 'Audience', content:'On the other hand, we denounce with righteous indignation'},
    { title: 'Followers', content:'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire'},
];

Lumpcontents.forEach((Lumpcontent, index)=>{
    const createdDiv=document.createElement('div');
    createdDiv.className = 'cre_d';

    createdDiv.innerHTML = `<h4>${Lumpcontent.title}</h4><h5>${Lumpcontent.content}</h5>`;



const elements=document.querySelectorAll('.bento-grid-item--element');
const ids = Array.from(elements).map(elements=>elements.id);
console.log(ids);



if (ids[index]) {
    const arrayList = document.getElementById(ids[index])
        if (arrayList){
            arrayList.appendChild(createdDiv);}
            else{
            console.log()}
        }});