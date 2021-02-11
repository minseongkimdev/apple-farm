import { useState } from 'react'
import dynamic from 'next/dynamic'
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

function PureEditor({ QuillChange, Contents }) {
    const Quill = typeof window === 'object' ? require('quill') : () => false

    const quillElement = useRef() // quill을 넣을 div
    const quillInstance = useRef() // quill 인스턴스

    useEffect(() => {
        if (quillElement.current) {
            quillInstance.current = new Quill(quillElement.current, {
                theme: 'snow',
                placeholder: '내용을 입력해주세요',
                modules: modules,
                formats: formats,
            })

            // 퀼 인스턴스를 편하게 쓰기 위해 변수 설정
            const quill = quillInstance.current

            // 텍스트를 쳤을 때 state에 담기
            quill.on('text-change', (delta, oldDelta, source) => {
                QuillChange(quill.root.innerHTML)
            })

            // 이미지 핸들링을 위한 커스텀 핸들러
            const toolbar = quill.getModule('toolbar')
            toolbar.addHandler('image', onClickImageBtn)
        }
    }, [])

    // 기존 내용을 가져오기 위함(수정)
    const mounted = useRef(false)
    useEffect(() => {
        if (Contents === '' || mounted.current) return
        mounted.current = true
        quillInstance.current.root.innerHTML = Contents
    }, [Contents])

    return (
        <>
            <QuillWrapper className="wrapper">
                <div ref={quillElement}></div>
            </QuillWrapper>
        </>
    )
}

export default PureEditor
