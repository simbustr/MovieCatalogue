


export type MovieLabelProps = {
    title: string;
    year: string;
}


const MovieLabel = ({title,year}:MovieLabelProps) => {
  return (
    <div>
     <div>{title}</div> 
     <div>{year}</div>  
    </div>
  )
}

export default MovieLabel
