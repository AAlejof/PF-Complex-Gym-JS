const { Router } = require("express")

const {
    createPublication,
    deletePublication,
    editPublication,
    getAllPublications,
    getPublicationsByID,
    getPublicationsByName,
    filters
} = require("../controllers/index")

const router = Router()
router.get('/filters', filters) // filtros
router.get('/all', getAllPublications)
router.get('/:id', getPublicationsByID)
router.get('/', getPublicationsByName)


router.post("/", createPublication)
router.delete('/:id', deletePublication)
router.put('/:id', editPublication)

module.exports = router