/**
 * All calls to the API concerning bucketlists and bucketlist items
 */
import instance from '../config/axiosConfig';

class BucketlistApi {
  static getAllBucketlists(page) {
    return instance.get(`/v1/bucketlists?limit=5&page=${page}`);
  }
  static addBucketlistApi(values) {
    return instance.post('/v1/bucketlists', values);
  }
  static deleteBucketlistApi(id) {
    return instance.delete(`/v1/bucketlists/${id}`);
  }
  static getSingleBucketlist(id) {
    return instance.get(`/v1/bucketlists/${id}`);
  }
  static editBucketlistApi(id, values) {
    return instance.put(`/v1/bucketlists/${id}`, values);
  }
  static addBucketlistItemApi(id, values) {
    return instance.post(`/v1/bucketlists/${id}/items`, values);
  }
  static deleteBucketlistItemApi(bucketlistId, itemId) {
    return instance.delete(`/v1/bucketlists/${bucketlistId}/items/${itemId}`);
  }
  static editBucketlistItem(bucketlistId, itemId, values) {
    return instance.put(`/v1/bucketlists/${bucketlistId}/items/${itemId}`, values);
  }
  static searchBucketlistsApi(term) {
    return instance.get(`/v1/bucketlists?limit=5&page=1&q=${term}`);
  }
  static getBucketlistItemApi(bucketlistId, page) {
    return instance.get(`v1/bucketlists/${bucketlistId}/items?limit=5&page=${page}`);
  }
  static searchBucketlistItemsApi(bucketlistId, term) {
    return instance.get(`v1/bucketlists/${bucketlistId}/items?limit=5&page=1&q=${term}`);
  }
}
export default BucketlistApi;
