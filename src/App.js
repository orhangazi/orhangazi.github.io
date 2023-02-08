import { useEffect, useState } from "react"
import ProfilImage from "./images/instagram-150x150.jpg"
import SummaryEn from "./components/SummaryEn.js"
import SummaryTr from "./components/SummaryTr.js"

function App() {

	const [language, setLanguage] = useState("en")

	useEffect(()=>{
		console.log("Language changed: ", language)
	}, [language])

	return (
		<div className="container h-100">
				<div
					className="row d-flex flex-column min-vh-100 justify-content-center align-items-center"
					style={{paddingTop: 20}}
				>
					<div className="col-md-6">
						<div className="row">
							<div className="col" style={{textAlign: "right"}}>
								<a href="#" onClick={(e) => { 
										e.preventDefault()
										setLanguage("tr")
									}} style={{color: "antiquewhite"}}>
									Türkçe
								</a>
								<span> • </span>
								<a href="#" onClick={(e) => { 
										e.preventDefault()
										setLanguage("en")
									}} style={{color: "antiquewhite"}}>
									English
								</a>
							</div>
						</div>
						<div className="row">
							<div
								className="col-md-auto"
								style={{ alignSelf: "center", minWidth: 75, maxWidth: 150, marginRight: 20 }}
							>
								<img
									className="rounded"
									src={ProfilImage}
									alt="Orhan Gazi Kılıç - Software Developer in Turkey"
								/>
							</div>
							<div className="col">
								<h1>Orhan Gazi Kılıç</h1>
								{language === "tr" ? <h4>13 yıldır Türkiye'de Yazılım Uzmanı</h4> : <h4>Software Developer in Turkey since 13 years</h4>}
								<p>Gazi Software Comp.</p>
							</div>
						</div>
						<hr />
						{language==="tr"?<SummaryTr />:<SummaryEn />}
						<hr />
						{language === "tr" ? <h6>İletişim:</h6> : <h6>Contact:</h6>}
						<p>
							<span>Linkedin: </span>
							<a
								style={{color: "antiquewhite"}}
								href="https://www.linkedin.com/in/orhan-gazi-k%C4%B1l%C4%B1%C3%A7-09147077/"
								target="_blank"
							>
								Orhan Gazi Kılıç
							</a>
						</p>
						<p>
							
							<span>Github: </span>
							<a
								style={{color: "antiquewhite"}}
								href="https://github.com/orhangazi"
								target="_blank"
							>
								orhangazi
							</a>
						</p>
						<p>
							<span>Email: </span>
							<a style={{ color: "antiquewhite" }} href="mailto:orhngazi@gmail.com">
								orhngazi@gmail.com
							</a>
						</p>
					</div>
				</div>
			</div>
	)
}

export default App;