document.title = 'Tampil'

import {useParams} from 'solid-app-router'

export default function(){
	const {idnya} = useParams()
	return <p>{idnya}</p> 
}