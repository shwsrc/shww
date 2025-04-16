document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content')
    const reveal = document.getElementById('reveal')
    const audioElement = document.getElementById('audio')
    const videoElement = document.getElementById('video')
    // const views = document.getElementById('views')

    reveal.addEventListener('click', function () {
        if (audioElement) {
            audioElement.volume = 0.4
            audioElement.play()
        }

        if (videoElement) {
            videoElement.classList.remove('hidden')
            videoElement.play()
        }

        content.classList.remove('hidden')
        content.classList.remove('fade-in')

        this.style.display = 'none'

        const body = document.body
        body.style.backgroundSize = 'cover'
        body.style.backgroundPosition = 'center'
        body.style.backgroundAttachment = 'fixed'
        body.classList.add('fade-in', 'noise')
    })

    document.querySelectorAll('[title]').forEach(element => tippy(element, {
        content: element.getAttribute('title'),
        animation: 'fade',
        theme: 'dc'
    }))
})
