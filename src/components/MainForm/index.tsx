import { DefaultInput } from '../DefaultInput'
import { Cicles } from '../Cycles'
import { DefaultButton } from '../DefaultButton'
import { PlayCircleIcon } from 'lucide-react'

export function MainForm() {
    return (
        <form action="" className='form'>
            <div className="formRow">
                <DefaultInput labelText='meu Input' type='number' id='meuInput' />
            </div>
            <div className="formRow">
                <Cicles />
            </div>
            <div className="formRow">
                <DefaultButton icon={<PlayCircleIcon />} />
            </div>
        </form>
    )
}