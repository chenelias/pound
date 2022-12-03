import React, { useState } from 'react'
import Search from './components/Search'
import Footer from './components/Footer'
import Header from './components/Header'
import SettingMenu from './components/SettingMenu'
import './index.css'

const App = () => {
    const [settingActive, setSettingActive] = useState(false) // setSettingActive={setSettingActive} settingActive={settingActive}
    return (
        <main>
            <SettingMenu setSettingActive={setSettingActive} settingActive={settingActive} />
            <Header setSettingActive={setSettingActive} settingActive={settingActive} />
            <div></div>
            <Search />
            <Footer />
        </main>
    )
}

export default App
