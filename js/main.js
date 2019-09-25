Array.from(document.getElementsByClassName("member-card")).forEach(card => {
    card.onclick = function() {
        const img = card.getElementsByClassName("member-img-container")[0];
        const desc = card.getElementsByClassName("member-details")[0];
        let imgOpacity = window.getComputedStyle(img, null).getPropertyValue("opacity");
        
        switch (imgOpacity){
            case "1":
                img.style.opacity = "0";
                desc.style.opacity = "1";
                card.style.transform = "rotateY(180deg)";
                break;
            case "0":
                img.style.opacity = "1";
                desc.style.opacity = "0";
                card.style.transform = "rotateY(0deg)";
                break;
        }

    }
})
  