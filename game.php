$QandAarray = array(
	array("one", 0, 0, 0, 0, 0),
	array("two", 0, 0, 0, 0, 0),
	array("three", 0, 0, 0, 0, 0)
);

<script type="text/javascript">
    var my_var = <?php json_encode($my_var); ?>;
    if(my_var)
	    <?php array_push($QandAarray["one"],$newdata); ?>
</script>

