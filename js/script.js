window.onload=function(){
    movieApp();
}

function movieApp(){
    const posterBg=document.querySelector('#poster');
    const overView=document.querySelector('.overview');
    const movieTit=document.querySelector('.title');
    const langInfo=document.querySelector('.langinfo');
    const statusInfo=document.querySelector('.stainfo');
    const dateInfo=document.querySelector('.dateinfo');
    const rateInfo=document.querySelector('.rateinfo');
    const picPath=document.querySelector('.piclist');
    const homepageBtn=document.querySelector('.homepage');
    const moreBtn=document.querySelector('.more');

     let api='https://api.themoviedb.org/3/movie/550?api_key=api_key';
     
    fetch(api)
        .then(response=>{
            let data = response.json();
            return data;
        })
        .then(data=>{
            console.log(data);
            let poster_path = data.poster_path;
            let backDropPath=data.backdrop_path;
            posterBg.style.backgroundImage=`url("https://image.tmdb.org/t/p/original/${poster_path}")`;
            overView.textContent=`"${data.overview}"`;
            movieTit.textContent=data.title;
            langInfo.textContent=data.original_language.toUpperCase();
            statusInfo.textContent=data.status;
            dateInfo.textContent=data.release_date;
            rateInfo.textContent=data.vote_average;
            picPath.style.backgroundImage=`url("https://image.tmdb.org/t/p/original/${backDropPath}")`;
            homepageBtn.addEventListener('click', ()=>{
                window.location.href=`${data.homepage}`
            })
            moreBtn.addEventListener('click', ()=>{
                window.location.href=`${data.homepage}`
            })
        })
    
}
