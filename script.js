// https://www.codewars.com/kata/515bb423de843ea99400000a/train/javascript

// function PaginationHelper(collection, itemsPerPage) {
//   this.collection = collection;
//   this.itemsPerPage = itemsPerPage;
// }

// // returns the number of items within the entire collection
// // Done
// PaginationHelper.prototype.itemCount = function () {
//   return this.collection.length;
// };

// // returns the number of pages
// // Done
// PaginationHelper.prototype.pageCount = function () {
//   return Math.ceil(this.collection.length / this.itemsPerPage);
// };

// // returns the number of items on the current page. page_index is zero based.
// // this method should return -1 for pageIndex values that are out of range\
// // DONE
// PaginationHelper.prototype.pageItemCount = function (pageIndex) {
//   // pageIndex === 0 => 10
//   // pageIndex === 1 => 24 - 10 = 6
//   // pageIndex === 2 => 6 - 4
//   // pageIndex === 3 => 2  - 4 = -2

//   if (pageIndex === 0) {
//     return this.itemsPerPage;
//   } else {
//     let result = this.collection.length;

//     for (let i = 1; i <= pageIndex; i++) {
//       result = result - this.itemsPerPage;

//       if (result > this.itemsPerPage && pageIndex === i) {
//         return this.itemsPerPage;
//       }
//     }
//     return result <= 0 ? -1 : result;
//   }
// };

// // determines what page an item is on. Zero based indexes
// // this method should return -1 for itemIndex values that are out of range
// PaginationHelper.prototype.pageIndex = function (itemIndex) {
//   if (itemIndex > this.collection.length - 1 || itemIndex < 0) {
//     return -1;
//   }

//   if (itemIndex > 0 && itemIndex < this.itemsPerPage || itemIndex === 0) {
//     return 0;
//   } else {
//     return itemIndex - this.itemsPerPage;
//   }
// };

function PaginationHelper(collection, itemsPerPage) {
    (this.collection = collection), (this.itemsPerPage = itemsPerPage);
  }
  
  PaginationHelper.prototype.itemCount = function () {
    return this.collection.length;
  };
  
  PaginationHelper.prototype.pageCount = function () {
    return Math.ceil(this.collection.length / this.itemsPerPage);
  };
  
  PaginationHelper.prototype.pageItemCount = function (pageIndex) {
    return pageIndex < this.pageCount()
      ? Math.min(
          this.itemsPerPage,
          this.collection.length - pageIndex * this.itemsPerPage,
        )
      : -1;
  };
  
  PaginationHelper.prototype.pageIndex = function (itemIndex) {
    return itemIndex < this.collection.length && itemIndex >= 0
      ? Math.floor(itemIndex / this.itemsPerPage)
      : -1;
  };
  
  var helper = new PaginationHelper(
    [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24,
    ],
    10,
  );
  
  // console.log('page count: ', helper.pageCount());
  
  // console.log('item count: ', helper.itemCount());
  
  // console.log(helper.pageItemCount(0)); // 4
  
  //console.log(helper.pageItemCount(1)); // 2
  
  // console.log(helper.pageItemCount(2)); // should == -1 since the page is invalid
  
  // pageIndex takes an item index and returns the page that it belongs on
  //console.log(helper.pageIndex(5)); //should == 1 (zero based index)
  // console.log(helper.pageIndex(2)); //should == 0
  // console.log(helper.pageIndex(20)); //should == -1
  // console.log(helper.pageIndex(-10)); //should == -1
  
  console.log(helper.pageIndex(3));
  