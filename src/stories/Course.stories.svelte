<script module>
    import { defineMeta } from '@storybook/addon-svelte-csf';
    import Course from './Course.svelte';

    const { Story } = defineMeta({
        title: 'Landing/Course',
        component: Course,
        tags: ['autodocs'],
        parameters: {
            layout: 'fullscreen',
        },
    });
</script>

<Story
    name="Resting"
    args={{
        course: {
            name: "Course Name",
            description: "Course Description",
        },
    }}
/>