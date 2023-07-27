import { useState } from "react"

export default function Home() {
    const [prompt, setPrompt] = useState("")
    const [answer1, setAnswer1] = useState("")
    const [answer2, setAnswer2] = useState("")
    const [answer3, setAnswer3] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()
        
        

        const response = await fetch("/api/getAnswers", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ prompt: prompt })
        })

        const data =await response.json()
        

        
        setAnswer1(data[0].text.trim())
        setAnswer2(data[1].text.trim())
        setAnswer3(data[2].text.trim())

    }



    function handleChange(e) {
        setPrompt(e.target.value)


    }


    return (
        <div>

            <input type="text" id="inputAi" className="InputT" onChange={handleChange} />
            <br />
            
            <button type="button" onClick={handleSubmit}>Click Me!</button>
            <br />
            <p className="parag">{answer1}</p>
            <br />
            <hr className="HrLine"/>
            <p className="parag">{answer2}</p>
            <br />
            <hr className="HrLine"/>
            <p  className="parag" >{answer3}</p>

        </div>
    )
}