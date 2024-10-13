

interface TeamArrayObjectOfTypes {
    Team:{
    name:string,
age:number,
profession:string
}[]
}
function ArrayObjectTypes(props:TeamArrayObjectOfTypes) {
  return (
    <div>
{props.Team.map((team)=>(
  <>
    <li>{team.name}</li>
    <li>{team.age}</li>
    <li>{team.profession}</li>
  </>
))}
    </div>
  )
}

export default ArrayObjectTypes