import React from 'react';
import mechanic1 from '../../../images/mechanic/mechanic-1.jpg'
import mechanic2 from '../../../images/mechanic/mechanic-2.jpg'
import mechanic3 from '../../../images/mechanic/mechanic-3.jpg'
import mechanic4 from '../../../images/mechanic/mechanic-4.jpg'
import Expart from './../Expart/Expart';

const exparts = [
{
img:mechanic1,
name:'andrew Smith',
expertize:'-Engine Expert'


},
{
img:mechanic2,
name:'john anderson',
expertize:'-Engine Expert'


},
{
img:mechanic3,
name:'Zakaria Smith',
expertize:'-Coloring Exparts'


},
{
img:mechanic4,
name:'Sakib Anderson',
expertize:'-AllRounder Expert'


},

]

const Exparts = () => {
    return (
       <div className ="Mt-10">


<div className ="continer">
          <h2 className ="text-center text-primary mt-10 ">Our exparts</h2>
          <div className =" row">
              {
exparts.map(expart =><Expart
key ={expart.name}
expart ={expart}


></Expart>)

              }


          </div>



        </div>


       </div>
    );
};

export default Exparts;