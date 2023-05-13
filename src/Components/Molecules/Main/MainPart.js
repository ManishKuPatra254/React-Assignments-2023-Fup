import { InputFields } from '../../Atoms/Inputs/Input'

import MainStyles from './MainPart.module.css'

export function MainToDoListApp() {
    return (
        <>
            <div className={MainStyles.main_head}>
                <h1>To Do List App 📒</h1>
            </div>

            <div className={MainStyles.container}>

                <InputFields />

            </div>

        </>
    )
}