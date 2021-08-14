document.title = 'Tampil'

import {useParams, Link} from 'solid-app-router'
import style from './_idnya.module.css'
import {post} from 'axios'
import {stringify} from 'qs'
import {sql, teks} from './api'
import {createSignal, onMount} from 'solid-js'

export default function(){
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

	return <div className={style.jarak}>
		<Link className={style.tombol} href='/tulis'>Tulis baru</Link>
		<p className={style.hasilnya}>{hasil().trim()}</p> 
	</div>
}