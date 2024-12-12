import { handlePagination } from "../scripts/index.js";

export const controlPagination = (pageNo,totalItems,limit=10,paginationContainer)=>{
 
    paginationContainer.innerHTML = "";

    const totalPages = Math.ceil(totalItems/limit);

    let currentPage = pageNo;

    const prevButton =  document.createElement("button");
    prevButton.textContent = "Prev";

    if(currentPage <= 1){
        prevButton.disabled = true;
    }

    prevButton.addEventListener("click",()=>{
        currentPage--;
        handlePagination(currentPage,limit);     
    });

    const nextButton = document.createElement("button");
    nextButton.textContent = "Next";

    if(currentPage >= totalPages){
        nextButton.disabled = true;
    }

    nextButton.addEventListener("click",()=>{
        currentPage++;
        handlePagination(currentPage,limit);
    })

    paginationContainer.append(prevButton,nextButton);
}