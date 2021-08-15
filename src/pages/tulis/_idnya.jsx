import {useParams, Link} from 'solid-app-router'
import './_idnya.scss'
import {post} from 'axios'
import {stringify} from 'qs'
import {sql, teks} from './api'
import {createSignal, onMount} from 'solid-js'

export default function(){
	document.title = 'Tampil'

	const {idnya} = useParams()
	const [hasil, setHasil] = createSignal('')

	async function ambilData(){
		const {data} = await post(sql, stringify({
			id: teks,
			kunci: 'ambil',
			idnya
		}))
		setHasil(data[0].teks)
	}
	onMount(() => ambilData())

	return <div className='aievmakdjfai'>
		<Link className='tombol' href='/tulis'>Tulis baru</Link>
		<p>{hasil().trim()}</p> 
	</div>
}