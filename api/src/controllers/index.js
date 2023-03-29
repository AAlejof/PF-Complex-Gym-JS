const getActivitiesById = require("./activities/getActivitiesById")
const getActivitiesByName = require("./activities/getActivitiesByName")
const getAllActivities = require("./activities/getAllActivities")
const postActivities = require("./activities/postActivities")
const editActivities = require("./activities/editActivities")
const deleteActivities = require("./activities/deleteActivities")
const restoreActivities = require("./activities/restoreActivities")
const deleteClient = require("./clients/deleteClient")
const getAllClients = require("./clients/getAllClients")
const getClientById = require("./clients/getClientById")
const getClientByName = require("./clients/getClientByName")
const postClient = require("./clients/postClient")
const updateClientById = require("./clients/updateClientById")
const restoreClient = require("./clients/restoreClient")
const createPublication = require("./publications/createPublication")
const deletePublication = require("./publications/deletePublication")
const editPublication = require("./publications/editPublication")
const getAllPublications = require("./publications/getAllPublications")
const getPublicationsByID = require("./publications/getPublicationsByID")
const getPublicationsByName = require("./publications/getPublicationsByName")
const restorePublication = require("./publications/restorePublication")
const deleteTrainer = require("./trainer/deleteTrainer")
const restoreTrainer = require("./trainer/restoreTrainer")
const postTrainer = require("./trainer/postTrainer")
const getTrainerByName = require("./trainer/getTrainerByName")
const editTrainer = require("./trainer/editTrainer")
const getAllTrainers = require("./trainer/getAllTrainers")
const getTrainerById = require("./trainer/getTrainerById")
const filters = require('./publications/filters')
const getAllMemberships = require("./memberships/getAllMemberships");
const postMemberships = require("./memberships/postMemberships");
const deleteMemberships = require("./memberships/deleteMemberships");
const updateMemberships = require("./memberships/updateMemberships");
const getMembershipsById = require("./memberships/getMembershipsById")
const deleteAdmin = require("./admin/deleteAdmin")
const getAllAdmins = require("./admin/getAllAdmins")
const postAdmin = require("./admin/postAdmin")
const putAdmin = require("./admin/putAdmin")
const restoreAdmin = require("./admin/restoreAdmin")
const getAllTestimonials = require("./testimonials/getAllTestimonials")
const deleteTestimonials = require("./testimonials/deleteTestimonials")
const postTestimonials = require("./testimonials/postTestimonials")
const putTestimonials = require("./testimonials/putTestimonials") 
const restoreTestimonials = require("./testimonials/restoreTestimonials") 
const sendMail = require('./mails/sendMail')
const postPayments = require("./payments/postPayments")
const getFeedback = require("./payments/getFeedback")
const postNotification = require("./payments/postNotification")
const deletePlans = require("./plans/deletePlans")
const getAllPlans = require("./plans/getAllPlans")
const postPlans = require("./plans/postPlans")
const updatePlans = require("./plans/updatePlans")
const getAllPayments = require("./payments/getAllPayments")
const getPaymentsById =require("./payments/getPaymentsById")
const getAllCalendar = require('./calendar/getAllCalendars')
const postCalendar = require('./calendar/postCalendar')


module.exports = {
    getActivitiesById,
    getActivitiesByName,
    getAllActivities,
    postActivities,
    editActivities,
    deleteActivities,
    restoreActivities,
    deleteClient,
    getAllClients,
    getClientById,
    getClientByName,
    postClient,
    restoreClient,
    updateClientById,
    createPublication,
    deletePublication,
    editPublication,
    getAllPublications,
    getPublicationsByID,
    getPublicationsByName,
    restorePublication,
    filters,
    getAllMemberships,
    postMemberships,
    deleteMemberships,
    updateMemberships,
    deleteTrainer,
    postTrainer,
    getTrainerByName,
    editTrainer,
    getAllTrainers,
    getTrainerById,
    restoreTrainer,
    filters,
    postPayments,
    getMembershipsById,
    filters,
    deleteAdmin,
    getAllAdmins,
    postAdmin,
    putAdmin,
    restoreAdmin,
    getAllTestimonials,
    deleteTestimonials,
    postTestimonials,
    putTestimonials,
    restoreTestimonials,
    getFeedback,
    postNotification,
    deletePlans,
    getAllPlans,
    postPlans,
    updatePlans,
    sendMail,
    getFeedback,
    getAllPayments,
    getPaymentsById,
    getAllCalendar,
    postCalendar
}

