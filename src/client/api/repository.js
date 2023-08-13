export default $axios => resource => ({
  get (path, query) {
    const config = {}
    if (query !== null) {
      config.params = query
    }
    if (path) { return $axios.$get(`/api/${resource}/${path}/`, config) } else { return $axios.$get(`/api/${resource}/`, config) }
  },
  post (path, payload) {
    return $axios.$post(`/api/${resource}/${path}/`, payload)
  },
  put (path, payload) {
    return $axios.$put(`/api/${resource}/${path}/`, payload)
  },
  patch (path, payload) {
    return $axios.$patch(`/api/${resource}/${path}/`, payload)
  },
  delete (path) {
    return $axios.$delete(`/api/${resource}/${path}/`)
  }
})
