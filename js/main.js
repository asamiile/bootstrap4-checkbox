$(function() {

  // 全選択チェックボックス
  $('#customCheckAll').on('change', function() {

    if ($(this).prop('checked')) {
      $('.checkbox-single > input[type=checkbox]').prop('checked', true);
      // console.log('全選択'); // デバッグ用
    } else {
      $('.checkbox-single > input[type=checkbox]').prop('checked', false);
      // console.log('全選択解除'); // デバッグ用
    }
  });

});
