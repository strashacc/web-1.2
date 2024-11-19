activeAccordionItem = document.getElementsByClassName("accordion-item active")[0];
accordionItems = document.getElementsByClassName("accordion-item");
accordionBtnClick(activeAccordionItem);

for(let i = 0; i < accordionItems.length; ++i){
    accordionItems[i].getElementsByClassName("accordion-button")[0].onclick = function(){accordionBtnClick(accordionItems[i])};
}


function accordionBtnClick(item){
    toggleAccordion(item);

    if(activeAccordionItem == null){
        activeAccordionItem = item;
        return;
    }
    if(item == activeAccordionItem){
        activeAccordionItem = null;
        return;
    }

    toggleAccordion(activeAccordionItem);
    activeAccordionItem = item;

    function toggleAccordion(x){
        xBtn = x.getElementsByClassName("accordion-button")[0];
        xContent = x.getElementsByClassName("accordion-collapse")[0];

        x.classList.toggle("active");
        xBtn.setAttribute("aria-expanded", (x.getAttribute("aria-expanded") == "false").toString());
        xBtn.classList.toggle("collapsed");
        xContent.classList.toggle("show");
        
        if(xContent.classList.contains("show")){
            xContent.style.height = xContent.getElementsByClassName("accordion-body")[0].clientHeight + "px";
        }
        else{
            xContent.style.height = 0;
        }
    }
}

