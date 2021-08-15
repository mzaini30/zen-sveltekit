import './index.scss'
import {For} from 'solid-js'
import {Link} from 'solid-app-router'

let aplikasi = [
    {nama: 'Tulis', link: 'tulis', icon: `<svg viewBox="0 0 24 24"><path d="M17.849 11.808l-.707-.707l-9.9 9.9H3v-4.243L14.313 5.444l5.657 5.657a1 1 0 0 1 0 1.414l-7.07 7.071l-1.415-1.414l6.364-6.364zm-2.121-2.121l-1.415-1.414L5 17.586v1.415h1.414l9.314-9.314zm2.828-7.071l2.829 2.828a1 1 0 0 1 0 1.414L19.97 8.273L15.728 4.03l1.414-1.414a1 1 0 0 1 1.414 0z" fill="currentColor"></path></svg>`},
]

export default function(){
    document.title = 'Zen'

    return <div className="kameiamsalkSDkafa">
        <For each={aplikasi}>{x => <Link className='aplikasi' href={`/${x.link}`}>
            <span className="icon" innerHTML={x.icon}></span>
            <p>{x.nama}</p>
        </Link>}</For>
    </div>
}