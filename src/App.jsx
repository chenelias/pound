import React, { useState } from 'react'
import Search from './components/Search'
import Footer from './components/Footer'
import Header from './components/Header'
import SettingMenu from './components/SettingMenu'
import './index.css'
import useDarkMode from './components/useColorMode'
const App = ({ props }) => {
    const useLocalStorage = (keyName, defaultValue) => {
        const [storedValue, setStoredValue] = React.useState(() => {
            try {
                const value = window.localStorage.getItem(keyName)

                if (value) {
                    return JSON.parse(value)
                } else {
                    window.localStorage.setItem(keyName, JSON.stringify(defaultValue))
                    return defaultValue
                }
            } catch (err) {
                return defaultValue
            }
        })
        const setValue = (newValue) => {
            try {
                window.localStorage.setItem(keyName, JSON.stringify(newValue))
            } catch (err) {}
            setStoredValue(newValue)
        }

        return [storedValue, setValue]
    }
    const [background, setbackground] = useLocalStorage('backgroundcolor', '') //* setbackground={setbackground} background = { background }
    const [settingActive, setSettingActive] = useState(false) //* setSettingActive={setSettingActive} settingActive={settingActive}
    const [searchengin, setsearchengin] = useLocalStorage('searchengin', 'google') //* google,duckduckgo // searchengin={searchengin} setsearchengin = { setsearchengin }
    const [backgroundImage, setBackgroundImage] = useLocalStorage('backgroundimage', null) //* backgroundImage={backgroundImage} setBackgroundImage={setBackgroundImage}

    return (
        <main className="">
            <SettingMenu
                setbackground={setbackground}
                background={background}
                searchengin={searchengin}
                setsearchengin={setsearchengin}
                setSettingActive={setSettingActive}
                settingActive={settingActive}
                backgroundImage={backgroundImage}
                setBackgroundImage={setBackgroundImage}
            />
            <Header setSettingActive={setSettingActive} settingActive={settingActive} />
            <div></div>
            <Search
                backgroundImage={backgroundImage}
                setBackgroundImage={setBackgroundImage}
                searchengin={searchengin}
                setbackground={setbackground}
                background={background}
                setsearchengin={setsearchengin}
            />
            <Footer />
        </main>
    )
}

export default App
