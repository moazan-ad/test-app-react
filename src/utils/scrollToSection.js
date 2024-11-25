


export default function scrollToSectionId(sectionId){
    const section = document.getElementById(sectionId);
    return section?.scrollIntoView({
        behavior: 'smooth'
    })
}