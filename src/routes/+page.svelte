<script lang="ts">
import Course from '$stories/Course.svelte';
import Button from '$stories/Button.svelte';

let courses = $state<Course[]>([]);
$inspect(courses);

let loading = $state(false);

$effect(() => {
    loading = true;
    fetch("/api/courses")
        .then(res => res.json())
        .then(data => courses = data.courses)
        .finally(() => loading = false);
});

const addCourse = () => {
    fetch("/api/courses", {
        method: "POST",
        body: JSON.stringify({name: "New Course", description: "New Course Description"}),
    })
        .then(res => res.json())
        .then(data => courses = data.courses);
};

</script>

<Button
    label="Add course"
    primary
    onClick={addCourse}
/>

{#if loading}
    <p>Loading...</p>
{:else if courses.length === 0}
    <p>Nothing here</p>
{:else}
    {#each courses as course}
        <Course course={course} />
    {/each}
{/if}
