import react,{ useState,useEffect}from 'react'
import { useHistory, useParams} from "react-router-dom";
const DescriptionPage=props=>{
    const history=useHistory();
    const [tab, setTab] = useState("");
    let { id } = useParams();
           //    console.log("id",id);
    useEffect(() => {
    const results =props.movies.find(el=>el.id==id);
    setTab(results);
    },[id,props.movies]);
    
    console.log("tab",tab)
    if(tab){
        return (
                <div className='cardContainer1'>
                    <div className='row1'>
                    <h1 className="title">{tab.title}</h1>
                    </div>
                     <iframe className="video1" src={tab.videoURL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div className='rowp'>
                    <p>{tab.description}</p>
                    </div>
                    <div className='row1'>
                        <button className="button"
                            onClick={() => {
                                history.goBack();
                            }}>
                            Home Page
                        </button>
                    </div>
            </div>
        )
    }else{ return null}
    
};
export default DescriptionPage