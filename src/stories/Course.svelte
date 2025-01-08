<script lang="ts">
    const {course} = $props();
</script>

<div>
    <h1>{course.name}</h1>
    <p>{course.description}</p>
</div>

<style lang="scss">
div {
    border: 1px solid #aaa;
}
</style>
