import { FC } from "react"

export const KeyBoard: FC = () => {
    return (
        <div className='w-[505px] h-[210px] m-auto mt-[0px] flex items-center pt-10 bg-pop-up flex-col gap-[8px] select-none'>
            <div className='w-[505px] h-[36px] flex flex-row gap-[7px]'>
                <div className='key' id="KeyQ">Q</div>
                <div className='key' id="KeyW">W</div>
                <div className='key' id="KeyE">E</div>
                <div className='key' id="KeyR">R</div>
                <div className='key' id="KeyT">T</div>
                <div className='key' id="KeyY">Y</div>
                <div className='key' id="KeyU">U</div>
                <div className='key' id="KeyI">I</div>
                <div className='key' id="KeyO">O</div>
                <div className='key' id="KeyP">P</div>
                <div className='key' id="BracketLeft">[</div>
                <div className='key' id="BracketRight">]</div>
            </div>
            <div className='w-[463px] h-[36px] flex flex-row gap-[7px]'>
                <div className='key' id="KeyA">A</div>
                <div className='key' id="KeyS">S</div>
                <div className='key' id="KeyD">D</div>
                <div className='key' id="KeyF">F</div>
                <div className='key' id="KeyG">G</div>
                <div className='key' id="KeyH">H</div>
                <div className='key' id="KeyJ">J</div>
                <div className='key' id="KeyK">K</div>
                <div className='key' id="KeyL">L</div>
                <div className='key flex-col text-base leading-[10px]' id="Semicolon">
                    <span>.</span>
                    <span className='mb-[8px]'>,</span>
                </div>
                <div className='key' id="Quote">'</div>
            </div>
                <div className='w-[420px] h-[36px] flex flex-row gap-[7px]'>
                <div className='key' id="KeyZ">Z</div>
                <div className='key' id="KeyX">X</div>
                <div className='key' id="KeyC">C</div>
                <div className='key' id="KeyV">V</div>
                <div className='key' id="KeyB">B</div>
                <div className='key' id="KeyN">N</div>
                <div className='key' id="KeyM">M</div>
                <div className='key' id="Comma">,</div>
                <div className='key' id="Period">.</div>
                <div className='key' id="Period">/</div>
            </div>
            <div className='w-[249px] h-[35px] bg-block-black rounded-[10px] shadow-block' id="Space"></div>
      </div>
    )
}