document.title = 'Tulis'

import style from './index.module.css'
import {sql, teks} from './api'
import {createSignal} from 'solid-js'
import {post} from 'axios'
import {stringify} from 'qs'
import randomatic from 'randomatic'

export default function(){
	const [teksnya, setTeksnya] = createSignal('')
	let idnya

	async function simpan(){
		idnya = randomatic('a0', 4)
		const {data: banyak} = await post(sql, stringify({
			id: teks,
			kunci: 'cek',
			idnya
		}))
		if (banyak[0].banyak > 0){
			simpan()
		} else {
			const sudahSimpan = await post(sql, stringify({
				id: teks,
				kunci: 'tambah',
				teks: teksnya(),
				idnya
			}))
			if (sudahSimpan){
				
			}
		}

	}

	return <form class={style.jarak} action="">
		<textarea placeholder='Masukkan teks yang mau disimpan' name="" class={style.input} id="" cols="30" onInput={x => setTeksnya(x.target.value)} rows="10"></textarea>
		<input type="submit" value='Simpan' class={style.tombol}/>
	</form>
}