import useScrollDetection from "../hooks/useScrollDetection";


const DetectScroll=()=>{
    const scrollDetection=useScrollDetection();
    return (
        <>
    <h3>Scroll Direction : {scrollDetection}</h3>
    <h1>Practice</h1>
    </>
    );
};

export default DetectScroll;