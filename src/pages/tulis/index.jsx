document.title = 'Tulis'

import style from './index.module.css'
import {sql, teks} from './api'
import {createSignal} from 'solid-js'
import {post} from 'axios'
import {stringify} from 'qs'

export default function(){
	const [teksnya, setTeksnya] = createSignal('')

	async function simpan(){
		const sudahSimpan = await post(sql, stringify({
			id: teks,
			kunci: 'tambah',
			teks: teksnya()
		}))
	}

	return <form class={style.jarak} action="">
		<textarea placeholder='Masukkan teks yang mau disimpan' name="" class={style.input} id="" cols="30" onInput={x => setTeksnya(x.target.value)} rows="10"></textarea>
		<input type="submit" value='Simpan' class={style.tombol}/>
	</form>
}