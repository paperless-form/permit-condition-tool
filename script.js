$(document).ready(function () {
    // Initialize Select2
    $('.search-select').select2({
        placeholder: "Select option"
    });

    $('.select2-search__field').attr('placeholder', 'Search here');
});

var hideCls, showCls;
$(document).on('change', 'select', function () {
    var hideCls = $(this).find('option:selected').data('hide');
    var showCls = $(this).find('option:selected').data('show');

    if (typeof hideCls !== undefined) {
        $(hideCls).find('input').val("").end().find('select').val(null).change().end().addClass('d-none');
    }
    if (typeof showCls !== undefined) {
        $(showCls).removeClass('d-none')
    }
});