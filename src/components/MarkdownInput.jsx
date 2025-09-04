import { useState } from "react";

export default function MarkdownInput(){
  try {
      const [myNotes, setMyNotes]=useState({
    id:0,
    title: "Test",
    text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, sapiente magni. Totam minima doloribus reiciendis, autem repellendus consequuntur quod iure eum ipsum fugiat distinctio iste voluptatibus natus qui nihil! A!
    Necessitatibus saepe sapiente quae commodi modi laudantium. Dolores nam ipsum, aut, necessitatibus aspernatur eaque corrupti modi iure, exercitationem perferendis non neque ipsa aliquid tenetur? Eveniet rem sit labore eius eaque.`,
    createdAt: Date.now()
  });
  localStorage.setItem("Notes", {myNotes});

  
  } catch (error) {
    console.log('pas assez de stockage', error)
  }
  
  return(
    <>
    
    </>
  )
}
// pour enregistrer sur locale storage
// const user = { pseudo: 'Athios', age: 30 };
// localStorage.setItem('user', JSON.stringify(user));   

// pour recuperer sur locale storage
// const userJSON = localStorage.getItem('user');
// const user = userJSON ? JSON.parse(userJSON) : null;   