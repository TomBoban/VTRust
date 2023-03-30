import localStorageHelper from "../helpers/localstorage";

export const getBase64 = (file, onSuccess, onError) => {
  var reader = new FileReader();
  reader.readAsDataURL(file);
  console.log(file);
  reader.onload = function () {
    return reader.result;
  };
  reader.onerror = function (error) {
    return null;
  };
};

export const clearStorage = () => {
  localStorageHelper.clear('auth');
  localStorageHelper.clear('user');
}