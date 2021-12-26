<><div id="data" style="background: #fff; cursor: pointer; padding: 5px 10px; border: 1px solid #ccc; width: 100%">
    <i class="fa fa-calendar"></i>&nbsp;
    <span></span> <i class="fa fa-caret-down"></i>
</div><script type="text/javascript">
        $(function() { }

        var start = moment().subtract(29, 'days');
        var end = moment();

        function cb(start, end) {$('#data').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'))};
        

        $('#reportrange').daterangepicker({startDate}: start,
        endDate: end,
        ranges: {'Today'}: [moment(), moment()],
        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        {"}"}
        {"}"}, cb);

        cb(start, end);
        {"}"});
    </script></>

('input[name="dates"]').daterangepicker();