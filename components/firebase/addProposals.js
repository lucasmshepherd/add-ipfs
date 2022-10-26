import { addDoc, collection } from 'firebase/firestore'
import { db } from './config'
import React, {useState} from 'react'

export const addProposals = async ({ personName, description }) => {
// const addProposals = async (notificationId, { title, description, imgUrl }) => {

  try {
    // const docRef = doc(db, 'notification', `${notificationId}`) // creating a document reference
    // await setDoc(docRef, {
      //   // walletAddress: account,
      //   heading: title,
      //   body: description,
      //   img: imgUrl,
      // })

      const docRef = collection(db, 'Proposals') // creating a document reference
      await addDoc(docRef, {
          heading: personName,
          body: description
        })
  } catch (error) {
    console.log(error)
  }
}
const main = {
    width:'100%',
}
const proposalDiv = {
    display : 'flex',
    flexDirection : 'column',
}
const input = {
    margin: '10px 0',
    background : 'rgba(255,255,255,0.05)',
    color:'white',
    padding: '10px',
    fontSize: '18px',
    border: '1px solid rgba(254, 229, 0, 0.2)',
    borderRadiu: '12px',
    maxHeight: '300px',
    maxWidth: '100%',
    minHeight:'50px',
    boxShadow: '0 0 10px inset rgb(254 229 0 / 5%), 0 0 12px rgb(254 229 0 / 10%), 0 5px 5px rgb(0 0 0 / 25%)',
}
export default function AcceptProposals () {

    const[error, setError] = useState(false)
    const[message, setMessage] = useState('')
    const[personName, setNewName] = useState('')
    const[description, setDescription] = useState('')

    const callProposal = () =>{
        console.log("name", personName)
        
        try{
            addProposals({personName, description})
            setMessage('Proposal Submitted Successfully')
            setError(false)
        }
        catch(error){
            setMessage('Proposal Submitted')
            setMessage('Proposal Could Not Be Sumitted')
            setError(true)
        }
    }

    return(
        <div style={main}>
            <h2>Submit Proposal</h2>
            <div style={proposalDiv}>                
                <input style={input} type="text" name="name" placeholder='Your Name ...' onChange={(e)=>setNewName(e.target.value)} required/>
                <textarea style={input} name="proposals" placeholder='Proposal Body ...' cols="30" rows="10" onChange={(e)=>setDescription(e.target.value)} required></textarea>
                {
                    error ?
                        <p style={{color:'red'}}>
                            {message}
                        </p>
                        :
                        <p style={{color:'rgb(144 255 0)'}}>
                            {message}
                        </p>
                }
                <button style={{...input, width:'150px', cursor:'pointer'}} type="submit" onClick={callProposal}>Submit</button>
            </div>
        </div>
    )
}