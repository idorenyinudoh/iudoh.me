export default function (to, from, savedPosition) {
    if (savedPosition) {
        return savedPosition
    }
    return { x: 0, y: 0, behavior: 'smooth' }
}